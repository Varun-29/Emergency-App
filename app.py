from mail import *
from flask import Flask, render_template,request,redirect,url_for
from werkzeug.datastructures import ImmutableMultiDict

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")
    
@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/service")
def service():
    return render_template("service.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")
    
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

@app.route("/show")
def show():
    return render_template("show.html")

def sendMail(email,location,phone):
    send_mail_driver("ashleshat5@gmail.com")
    send_mail_booked(email,location,phone)

@app.route('/booked')
def booked():
    return render_template("booked.html")

@app.route('/book', methods=['POST'])
def book():
    data = request.form
    print(data)
    #print(data['email'])
    location = data.get('location')
    hospital = data.get('selectedHospital')
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    severity = data.get('severity')
    result = sendMail(email,location,phone)

    response = {"message": "Python function executed successfully", "result": result}
    return booked()

@app.route('/emergency')
def emergency():
    return render_template("emergency.html")

@app.route('/emerg', methods=['POST'])
def emerg():
    # Extract data from the request, if necessary
    data = request.form
    # Access specific values using the .get() method
    print(data)
    print(type(data))
    print(data['email'])
    location = data.get('location')
    hospital = data.get('hospital')
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    severity = data.get('severity')
    # Call your Python function here
    result = sendMail(email,location,phone)

    # Return a response, possibly with the result
    response = {"message": "Python function executed successfully", "result": result}
    return booked()

if __name__ == "__main__":
    app.run(debug=True)