import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from openai import OpenAI
from flask_cors import CORS

app = Flask(__name__)

load_dotenv()

CORS(app)

app.config.from_pyfile('settings.py')

client = OpenAI()

@app.route('/')
def index():
    print(os.getenv('OPENAI_API_KEY'))
    return "Hello World"

@app.route('/chatbot/prompt', methods=['POST'])
def chatPrompt():
    data = request.get_json()
    prompt = data.get('prompt') 
    completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {
                "role": "user",
                "content": prompt
            }
        ]
    )
    print(completion)
    return jsonify(completion.choices[0].message.content)

@app.route('/image-generation/prompt', methods=['POST'])
def imageGenerationPrompt():

    data = request.get_json()
    imgPrompt = data.get('imgPrompt')

    response = client.images.generate(
        model="dall-e-3",
        prompt = imgPrompt,
        size="1024x1024",
        quality="standard",
        n=1,
    )
    
    #jsondata = jsonify(response)
    print(response)
    image_url = response.data[0].url

    return jsonify(image_url)


if __name__ == "__main__":
    app.run(debug=True)
    