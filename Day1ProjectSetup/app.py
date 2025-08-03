from flask import Flask, render_template

# Initialize Flask application
app = Flask(__name__)

# Define the main route
@app.route('/')
def home():
    """Render the main page"""
    return render_template('index.html')

# Run the application
if __name__ == '__main__':
    app.run(debug=True)