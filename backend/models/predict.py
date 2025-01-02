import sys
import pickle

# Load the trained model
with open('models/house_price_model.pkl', 'rb') as f:
    model = pickle.load(f)

# Get the number of rooms from the command-line arguments
rooms = int(sys.argv[1])

# Predict the house price based on the input
predicted_price = model.predict([[rooms]])[0]

# Print the result (this will be sent to the Express server)
print(predicted_price)
