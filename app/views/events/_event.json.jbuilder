json.extract! event, :id, :title, :start, :end, :url, :classNames, :backgroundColor, :borderColor, :textColor, :created_at, :updated_at
json.url event_url(event, format: :json)
