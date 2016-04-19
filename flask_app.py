from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
@app.route('/index')
@app.route('/index.html')
def indexHandler():
    # return 'Hello World!'
    user = {'nickname': 'Miguel'}  # fake user
    return render_template("index.html")


@app.route('/login')
@app.route('/login.html')
def loginHandler():
    return render_template("login.html")

@app.route('/blank')
@app.route('/blank.html')
def blankHandler():
    return render_template("blank.html")


@app.route('/buttons')
@app.route('/buttons.html')
def buttonsHandler():
    return render_template("buttons.html")


@app.route('/tables')
@app.route('/tables.html')
def tablesHandler():
    return render_template("tables.html")


@app.route('/forms')
@app.route('/forms.html')
def formsHandler():
    return render_template("forms.html")


if __name__ == '__main__':
    app.run(debug=True)
