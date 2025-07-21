from lyzr import Agent, KnowledgeBase
import boto3
import json
from typing import Dict, List

class AICostAdvisor:
    def __init__(self):
        # Initialize Lyzr Agent
        self.agent = Agent(
            role="Senior AI Cost Optimization Specialist",
            goal="Reduce AI operational costs by 30-50% without compromising performance",
            backstory="Expert in cloud economics and LLM optimization with 10+ years experience",
            tools=[self.model_advisor, self.architecture_optimizer]
        )
        
        # AWS Bedrock client
        self.bedrock = boto3.client('bedrock-runtime')
        
        # Pre-loaded knowledge base
        self.knowledge = KnowledgeBase(
            sources=["aws_pricing.pdf", "optimization_cases.json"],
            embedding_model="text-embedding-3-small"
        )

    def model_advisor(self, use_case: str, requirements: Dict) -> Dict:
        """Recommends optimal model based on use case"""
        prompt = f"""
        Analyze this AI workload for cost optimization:
        USE CASE: {use_case}
        REQUIREMENTS: {json.dumps(requirements)}
        
        Compare these models:
        - Claude Haiku
        - Mistral 7B
        - Amazon Nova
        
        Return JSON with:
        - recommended_model
        - cost_per_1k_tokens
        - latency_estimate
        - cost_saving_percentage
        """
        
        response = self.bedrock.invoke_model(
            modelId="anthropic.claude-3-haiku-20240307-v1:0",
            body=json.dumps({"prompt": prompt})
        )
        return json.loads(response['body'].read())

    def architecture_optimizer(self, current_architecture: str) -> List[str]:
        """Suggests architectural improvements"""
        optimizations = self.knowledge.query(
            f"Suggest cost optimizations for: {current_architecture}",
            top_k=3
        )
        return [opt['content'] for opt in optimizations]

    def calculate_roi(self, current_cost: float, proposed_cost: float) -> Dict:
        """Computes ROI metrics"""
        savings = current_cost - proposed_cost
        return {
            "monthly_savings": savings,
            "annual_savings": savings * 12,
            "savings_percentage": (savings / current_cost) * 100
        }

# ===== DEPLOYMENT READY =====
def lambda_handler(event, context):
    advisor = AICostAdvisor()
    
    # Get input from API Gateway
    data = json.loads(event['body'])
    
    # Step 1: Model recommendation
    model_rec = advisor.model_advisor(
        data['use_case'],
        data['requirements']
    )
    
    # Step 2: Architecture tips
    optimizations = advisor.architecture_optimizer(
        data.get('current_arch', '')
    )
    
    # Step 3: ROI calculation
    roi = advisor.calculate_roi(
        data['current_cost'],
        model_rec.get('estimated_cost', 0)
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps({
            'recommendation': model_rec,
            'optimizations': optimizations,
            'roi': roi
        })
    }
