from flask import Flask, render_template
from mail import *

app = Flask(__name__)

@app.route("/home")
def home():
    return render_template("home.html")
    
@app.route("/about")
def about():
    return render_template("about.html")
    
@app.route("/map")
def map():
    return render_template("map.html")

@app.route("/login")
def login():
    return render_template("login.html")
@app.route("/profile")
def profile():
    return render_template("profile.html")

@app.route("/signup")
def signup():
    return render_template("signup.html")

@app.route("/forgot_password")
def forgot_password():
    return render_template("forgot_password.html")

@app.route("/ambulance")
def ambulance():
    return render_template("ambulance.html")

if __name__ == "__main__":
    app.run(debug=True)