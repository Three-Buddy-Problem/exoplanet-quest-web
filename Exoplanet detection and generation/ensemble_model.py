# ensemble_model.py

def ensemble_predictions(pred_RF, pred_SVC):
    """
    Perform ensemble prediction using majority voting between two models.

    Parameters:
    pred_RF (list or np.array): Predictions from Random Forest model.
    pred_SVC (list or np.array): Predictions from SVC model.

    Returns:
    list: Ensemble predictions based on majority voting logic.
    """
    ensembled_predictions = []  
    
    for i in range(len(pred_RF)):
        if pred_RF[i] == pred_SVC[i]:
            ensembled_predictions.append(pred_RF[i])  # Append when predictions agree
        elif pred_RF[i] == 1 and pred_SVC[i] == 0:
            ensembled_predictions.append(pred_RF[i])  # Prefer RF prediction if it's 1
        else:
            ensembled_predictions.append(pred_SVC[i])  # Otherwise, take SVC prediction
    
    return ensembled_predictions
