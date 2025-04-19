
from flask import Flask, request, jsonify, render_template
import random
from nickname import call_name
from data import responses, why_reasons, hello_responses, farewell_responses, crisis_responses, thanks_responses

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("chat.html")

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json["message"].lower()

    for category in [hello_responses, thanks_responses, responses, why_reasons, crisis_responses, farewell_responses]:
        for keyword in category:
            if keyword in user_input:
                return jsonify({"response": random.choice(category[keyword])})

    return jsonify({"response": random.choice(responses["default"])})

# IMPORTANT: Only run if this file is executed directly
def run_chatbot():
    import logging
    log = logging.getLogger('werkzeug')
    log.setLevel(logging.ERROR)  # Optional: Hide Flask logs if you want cleaner terminal

    app.run(debug=False, use_reloader=False, threaded=True)

