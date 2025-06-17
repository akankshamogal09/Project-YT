from flask import Flask, request,render_template,json,jsonify, Blueprint
import sys
from youtube_transcript_api import YouTubeTranscriptApi
from transformers import pipeline

import eel


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('popup.html')

@app.route('/ProcessUserinfo/<string:ve>',methods=['POST'])
# to get the variable
def ProcessUserinfo(ve):
    transcript_list = YouTubeTranscriptApi.get_transcript(ve)
    transcript = ' '.join([d['text'] for d in transcript_list])
    summariser = pipeline('summarization')
    summary = ''
    for i in range(0, (len(transcript)//1000)+1):
        summary_text = summariser(transcript[i*1000:(i+1)*1000])[0]['summary_text']
        summary = summary + summary_text + ' '
    
    print(summary)
    return render_template('popup.html', data=summary)
    # return summary
    # return transcript


# @eel.expose
# def get_transcript(video_id):
#     transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
#     transcript = ' '.join([d['text'] for d in transcript_list])
#     return transcript



# def get_summary(transcript):
#     summariser = pipeline('summarization')
#     summary = ''
#     for i in range(0, (len(transcript)//1000)+1):
#         summary_text = summariser(transcript[i*1000:(i+1)*1000])[0]['summary_text']
#         summary = summary + summary_text + ' '
#     return summary
    

# @app.route('/')
# def hello():
#     data = get_summary(get_transcript(video_id))
#     return render_template('popup.html', data=data)




if __name__ == '__main__':
    app.run()


# eel.start('popup.html')