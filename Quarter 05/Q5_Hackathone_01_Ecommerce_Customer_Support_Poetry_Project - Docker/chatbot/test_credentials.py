# # test_credentials.py
# from google.oauth2 import service_account
# from google.auth.exceptions import DefaultCredentialsError

# try:
#     credentials = service_account.Credentials.from_service_account_file(
#         r"C:\Users\rizwa\Downloads\gen-lang-client-0599181679-e2473123f764.json"
#     )
#     print("Credentials successfully obtained.")
#     # If you need the project ID, ensure it's specified in the JSON or set separately
# except DefaultCredentialsError as e:
#     print("Failed to obtain credentials.")
#     print(str(e))
# except Exception as e:
#     print("An unexpected error occurred.")
#     print(str(e))

# ====================================================================================================

import google.auth
from langchain_google_genai import ChatGoogleGenerativeAI
import os

# Path to your credentials JSON file
credentials_path = r"C:\Users\rizwa\Downloads\gen-lang-client-0599181679-e2473123f764.json"

# Load credentials manually
credentials, project = google.auth.load_credentials_from_file(credentials_path)

if credentials and project:
    print(f"Successfully loaded credentials for project {project}")
else:
    print("Failed to load credentials.")

# Initialize the LLM (Google Generative AI Model)
try:
    llm = ChatGoogleGenerativeAI(
        model="gemini-1.5-flash",  # Make sure this model name is correct
        credentials=credentials  # Pass credentials directly
    )
    print("Successfully authenticated and initialized the model!")
except Exception as e:
    print(f"Error initializing the model: {str(e)}")


# ====================================================================================================

# from google.auth import credentials
# from google.cloud import Generativeai

# # Set up your credentials (e.g., from a JSON key file)
# credentials, project = google.auth.load_credentials_from_file("C:\\Users\\rizwa\Downloads\\gen-lang-client-0599181679-e2473123f764.json")

# # Initialize the Generative AI client with the credentials
# client = Generativeai.GenerativeAIClient(credentials=credentials)
