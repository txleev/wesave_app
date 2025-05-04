from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from db import *
from models import *
from water_logic import *
from gpt import *

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///water_usage.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

init_db(app)

@app.route("/api/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    liters = data.get("liters")
    days = data.get("days")

    if liters is None or days is None:
        return jsonify({"error": "Missing data"}), 400

    usage = calculate_usage(liters, days)
    
    # You can store only total, or both if needed
    record = WaterUsage(
        days=days,
        liters=liters,
        **usage["total"]
    )
    db.session.add(record)
    db.session.commit()

    analysis = generate_analysis(usage["total"], usage["per_day"], days)

    return jsonify({
        "usage": usage,
        "analysis": analysis
    })


@app.route("/", methods=["GET"])
def home():
    return "<h2>✅ Flask Backend is running.</h2>", 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6969)
