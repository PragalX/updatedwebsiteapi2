import { API } from '../types/api';

export const apis: API[] = [
  // Previous APIs remain...
  {
    id: 'ai-art-generator',
    name: 'AI Art Generator API',
    description: 'Generate unique AI artwork from text descriptions',
    language: 'Python',
    endpoint: 'https://api.pragyanpandey.com/python/ai-art',
    code: `from fastapi import FastAPI
from diffusers import StableDiffusionPipeline
import torch

app = FastAPI()

@app.post("/ai-art")
async def generate_art(prompt: str, style: str = "cyberpunk"):
    pipeline = StableDiffusionPipeline.from_pretrained("stable-diffusion-v1-5")
    image = pipeline(f"{prompt} in {style} style").images[0]
    return {"image": image_to_base64(image)}`,
    usage: 'curl -X POST "https://api.pragyanpandey.com/python/ai-art" -d "prompt=cyber city&style=synthwave"'
  },
  {
    id: 'voice-clone',
    name: 'Voice Cloning API',
    description: 'Clone voices and generate custom speech',
    language: 'Python',
    endpoint: 'https://api.pragyanpandey.com/python/voice-clone',
    code: `from fastapi import FastAPI, File
from TTS.api import TTS

app = FastAPI()

@app.post("/voice-clone")
async def clone_voice(voice: bytes = File(...), text: str):
    tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2")
    audio = tts.tts_with_clone(text, voice)
    return {"audio": audio_to_base64(audio)}`,
    usage: 'curl -X POST "https://api.pragyanpandey.com/python/voice-clone" -F "voice=@sample.wav" -F "text=Hello World"'
  },
  {
    id: 'code-explain',
    name: 'Code Explanation API',
    description: 'Get detailed explanations of code snippets',
    language: 'Python',
    endpoint: 'https://api.pragyanpandey.com/python/explain-code',
    code: `from fastapi import FastAPI
import openai

app = FastAPI()

@app.post("/explain-code")
async def explain_code(code: str, detail_level: str = "detailed"):
    explanation = await generate_explanation(code, detail_level)
    return {
        "explanation": explanation,
        "complexity": analyze_complexity(code),
        "best_practices": suggest_improvements(code)
    }`,
    usage: 'curl -X POST "https://api.pragyanpandey.com/python/explain-code" -d "code=def quicksort(arr): ..."'
  },
  {
    id: 'neural-style',
    name: 'Neural Style Transfer API',
    description: 'Apply artistic styles to images using AI',
    language: 'Python',
    endpoint: 'https://api.pragyanpandey.com/python/neural-style',
    code: `from fastapi import FastAPI, File
import torch
import torchvision.transforms as transforms
from PIL import Image

app = FastAPI()

@app.post("/neural-style")
async def transfer_style(
    content: bytes = File(...),
    style: bytes = File(...)
):
    content_img = Image.open(io.BytesIO(content))
    style_img = Image.open(io.BytesIO(style))
    output = style_transfer(content_img, style_img)
    return {"styled_image": img_to_base64(output)}`,
    usage: 'curl -X POST "https://api.pragyanpandey.com/python/neural-style" -F "content=@photo.jpg" -F "style=@style.jpg"'
  },
  {
    id: 'code-security',
    name: 'Code Security Scanner API',
    description: 'Scan code for security vulnerabilities',
    language: 'Python',
    endpoint: 'https://api.pragyanpandey.com/python/security-scan',
    code: `from fastapi import FastAPI
import bandit
from safety import safety

app = FastAPI()

@app.post("/security-scan")
async def scan_code(code: str):
    results = {
        "vulnerabilities": scan_for_vulnerabilities(code),
        "security_score": calculate_security_score(code),
        "recommendations": generate_security_fixes(code)
    }
    return results`,
    usage: 'curl -X POST "https://api.pragyanpandey.com/python/security-scan" -d "code=import pickle.loads(data)"'
  }
];