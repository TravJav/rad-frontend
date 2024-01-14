# smart-backend

1. from the root dir

./scripts/run-dev.sh
dc up -d

find the status check endpoint: http://127.0.0.1:5000/status


set up new relic:

curl -Ls https://download.newrelic.com/install/newrelic-cli/scripts/install.sh | bash && sudo NEW_RELIC_API_KEY=NRAK-DLQWOURKDG2ZQR8CT9F4VNJ9PLU NEW_RELIC_ACCOUNT_ID=4319216 /usr/local/bin/newrelic install
