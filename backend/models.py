from db import db

class WaterUsage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    days = db.Column(db.Integer, nullable=False)
    liters = db.Column(db.Float, nullable=False)
    showering = db.Column(db.Float)
    toilet_flushing = db.Column(db.Float)
    laundry = db.Column(db.Float)
    hygiene = db.Column(db.Float)
    dishwashing = db.Column(db.Float)
    drinking = db.Column(db.Float)
    cleaning = db.Column(db.Float)
    other = db.Column(db.Float)
