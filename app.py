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


@app.route("/details",methods=['POST'])
def details():
    if request.method == "POST":
        contact = request.get_json().get('contact')
        email = request.get_json().get('email')
        print(email,contact)
        return jsonify(statuscode=200,msg={email:email,contact:contact})
if __name__ == "__main__":
    app.run()
