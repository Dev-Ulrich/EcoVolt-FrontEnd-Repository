// Watson Assistant Configuration for EcoVolt
window.watsonAssistantChatOptions = {
  integrationID: "51dd8970-8fa4-4e17-bf4d-175c33af9bf3", // The ID of this integration.
  region: "https://integrations.au-syd.assistant.watson.appdomain.cloud", // The region your integration is hosted in.
  serviceInstanceID: "388da1e1-e3f5-44cd-b178-bf833e35f19b", // The ID of your service instance.
  onLoad: async (instance) => { 
    await instance.render(); 
  }
};

// Load Watson Assistant Chat
setTimeout(function(){
  const t = document.createElement('script');
  t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
