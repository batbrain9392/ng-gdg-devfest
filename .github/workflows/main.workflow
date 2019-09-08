workflow "Build and deploy on push" {
  on = "push"
  resolves = ["Firebase deploy"]
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "Production build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  args = "run build:prod"
}

action "Firebase deploy" {
  uses = "w9jds/firebase-action@7d6b2b058813e1224cdd4db255b2f163ae4084d3"
  needs = ["Production build"]
  args = "deploy --only hosting"
  secrets = ["FIREBASE_TOKEN"]
}