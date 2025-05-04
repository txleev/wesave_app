from openai import OpenAI
import os
from dotenv import load_dotenv


load_dotenv()


def generate_analysis(total_usage, per_day_usage, days):
    prompt = f"""
You are a smart and friendly assistant that gives short and practical advice based on a person's water usage.

User has used {sum(total_usage.values())}L of water in {days} days. Here's the breakdown:
Total usage: {total_usage}
Per-day usage: {per_day_usage}

Please:
1. Analyze the user's most water-consuming habits.
2. Suggest 2-3 ways to optimize or save water.
3. Keep it under 120 words, clear and friendly.
"""

    client = OpenAI(
        base_url="https://models.inference.ai.azure.com",
        api_key=os.environ["OPENAI_API_KEY"],
    )

    response = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "You are an expert in water conservation and sustainability.",
            },
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model="gpt-4o",
        temperature=0.7,
        max_tokens=4096,
        top_p=1
    )

    return response.choices[0].message.content
