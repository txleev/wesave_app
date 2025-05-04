def calculate_usage(total_liters, days):
    percentages = {
        "showering": 0.30,
        "toilet_flushing": 0.20,
        "laundry": 0.15,
        "hygiene": 0.10,
        "dishwashing": 0.10,
        "drinking": 0.05,
        "cleaning": 0.05,
        "other": 0.05
    }

    total_usage = {
        activity: round(total_liters * pct, 2)
        for activity, pct in percentages.items()
    }

    per_day_usage = {
        activity: round(val / days, 2)
        for activity, val in total_usage.items()
    }

    return {
        "total": total_usage,
        "per_day": per_day_usage
    }
