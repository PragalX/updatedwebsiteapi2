import { motion } from 'framer-motion';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const examples = [
  {
    id: 'ai-art-python',
    title: 'AI Art Generator - Python',
    description: 'Generate cyberpunk-style artwork from text descriptions',
    code: `import requests
import base64
from PIL import Image
import io

def generate_art(prompt: str, style: str = "cyberpunk"):
    response = requests.post(
        "https://api.pragyanpandey.com/python/ai-art",
        json={"prompt": prompt, "style": style}
    )
    
    if response.status_code == 200:
        # Convert base64 image to PIL Image
        img_data = base64.b64decode(response.json()["image"])
        img = Image.open(io.BytesIO(img_data))
        img.save("generated_art.png")
        return "Image saved as generated_art.png"
    
    return f"Error: {response.text}"

# Example usage
result = generate_art(
    prompt="A futuristic city with neon lights and flying cars",
    style="synthwave"
)`
  },
  {
    id: 'voice-clone-js',
    title: 'Voice Cloning - JavaScript',
    description: 'Clone a voice and generate custom speech',
    code: `// Using fetch API
async function cloneVoice(voiceFile, text) {
  const formData = new FormData();
  formData.append('voice', voiceFile);
  formData.append('text', text);

  try {
    const response = await fetch(
      'https://api.pragyanpandey.com/python/voice-clone',
      {
        method: 'POST',
        body: formData
      }
    );

    if (response.ok) {
      const data = await response.json();
      // Convert base64 audio to audio element
      const audio = new Audio(
        \`data:audio/wav;base64,\${data.audio}\`
      );
      audio.play();
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Example usage with file input
const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  cloneVoice(file, "Hello, this is my cloned voice speaking!");
});`
  },
  {
    id: 'code-explain-python',
    title: 'Code Explanation - Python',
    description: 'Get detailed explanations of code snippets',
    code: `import requests

def explain_code(code: str, detail_level: str = "detailed"):
    response = requests.post(
        "https://api.pragyanpandey.com/python/explain-code",
        json={
            "code": code,
            "detail_level": detail_level
        }
    )
    
    if response.status_code == 200:
        result = response.json()
        print("Explanation:", result["explanation"])
        print("\\nComplexity:", result["complexity"])
        print("\\nBest Practices:", result["best_practices"])
    
    return response.json()

# Example usage
code_snippet = """
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
"""

explanation = explain_code(code_snippet, "detailed")`
  },
  {
    id: 'neural-style-js',
    title: 'Neural Style Transfer - JavaScript',
    description: 'Apply artistic styles to images',
    code: `async function applyStyle(contentImage, styleImage) {
  const formData = new FormData();
  formData.append('content', contentImage);
  formData.append('style', styleImage);

  try {
    const response = await fetch(
      'https://api.pragyanpandey.com/python/neural-style',
      {
        method: 'POST',
        body: formData
      }
    );

    if (response.ok) {
      const data = await response.json();
      // Display the styled image
      const img = document.createElement('img');
      img.src = \`data:image/jpeg;base64,\${data.styled_image}\`;
      document.body.appendChild(img);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Example usage with file inputs
const contentInput = document.getElementById('content-image');
const styleInput = document.getElementById('style-image');

document.getElementById('apply-style').addEventListener('click', () => {
  const content = contentInput.files[0];
  const style = styleInput.files[0];
  applyStyle(content, style);
});`
  },
  {
    id: 'security-scan-python',
    title: 'Code Security Scanner - Python',
    description: 'Scan code for security vulnerabilities',
    code: `import requests

def scan_code_security(code: str):
    response = requests.post(
        "https://api.pragyanpandey.com/python/security-scan",
        json={"code": code}
    )
    
    if response.status_code == 200:
        result = response.json()
        print("Vulnerabilities Found:", result["vulnerabilities"])
        print("\\nSecurity Score:", result["security_score"])
        print("\\nRecommendations:", result["recommendations"])
    
    return response.json()

# Example usage
code_to_scan = """
import pickle
import requests

def process_data(data_file):
    with open(data_file, 'rb') as f:
        data = pickle.loads(f.read())  # Potential security risk
    
    response = requests.get(data['url'])  # Potential security risk
    return response.text
"""

security_report = scan_code_security(code_to_scan)`
  }
];

export default function ApiExamples() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold gradient-text mb-8 text-center"
        >
          API Usage Examples
        </motion.h1>

        <div className="space-y-8">
          {examples.map((example, i) => (
            <motion.section
              key={example.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="cyber-border-rainbow p-4 md:p-6"
            >
              <h2 className="text-2xl font-bold gradient-text mb-2">
                {example.title}
              </h2>
              <p className="text-[#00e1ff] mb-4">{example.description}</p>
              
              <SyntaxHighlighter
                language={example.id.includes('-js') ? 'javascript' : 'python'}
                style={atomOneDark}
                className="rounded-lg overflow-hidden"
                customStyle={{ padding: '1.5rem' }}
              >
                {example.code}
              </SyntaxHighlighter>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}