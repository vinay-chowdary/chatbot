from chatbot import chatbot
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
app.static_folder = 'static'


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/botresponse", methods=['POST'])
def get_bot_response():
    if request.method == 'POST':
        user_text = request.get_json().get('msg')
        return jsonify(statuscode=200, msg=str(chatbot.get_response(user_text)).lower())


if __name__ == "__main__":
    app.run()
