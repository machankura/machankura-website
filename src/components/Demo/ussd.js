 import $ from 'jquery';

/**
 * FLOW DEFINITION
 */
 const DEFAULT_STATUS = `options`;

 const datasetToList = (dataset = []) => dataset.map((item, index) => item && `${index}: ${item.title}`).filter(item => item).join('\n');
 
 /**
  * DEFAULT RENDERING FUNCTIONS
  */
 
 const displayError = async (message = `:( oops, please try again`) => {
   return await showOverlay({
     content: message,
     status: `error`
   })
 }
 
 const answerStandby = async (message = `Insert number`) => {
   return await showOverlay({
     content: message,
     status: `answerStandby`
   });
 }
 
 const answering = async (value) => {
   return await showOverlay({
     content: value,
     status: `answering`
   });
 }
 
 const getConfirmActionFromDataset = (dataset, index) => {
 
   return {
     'function': dataset,
     'object': dataset && dataset[index] && dataset[index].confirm // gross, find a better way asap
   }[typeof dataset];
 
 }
 
 const answer = (index, dataset) => {
 
   const confirmAction = getConfirmActionFromDataset(dataset, index);
 
   if (!confirmAction) {
     return Promise.reject(`:( 
       Error selecting option ${index}.
       
       Please try again.`);
   }
 
   return confirmAction();
 }
 
 const setStatus = async status => {
   $('.app').attr('data-status', status)
   return status;
 };
 
 const showOverlay = async ({ content = '', status = DEFAULT_STATUS } = {}) => {
   $('.app')
     .find('.phone-overlay').html(content).show();
 
   return { content, status };
 }
 
 const hideOverlay = async ({ status = DEFAULT_STATUS } = {}) => {
   $('.app')
     .find('.phone-overlay').html('').hide();
 
   return { status };
 }
 
 const showTransition = async ({ transitionSpeed = 1000 } = {}) => {
   await showOverlay({ content: `connecting ...`, status: `transition` }).then(({ status }) => setStatus(status));
   await new Promise(resolve => setTimeout(resolve, transitionSpeed));
   await hideOverlay();
 
   return;
 }
 
 const render = async ({ content = '', dataset, status = DEFAULT_STATUS } = {}) => {
 
   await showTransition();
 
   $('.app')
     .find('.phone-content').html(content)
     .end()
     .data('dataset', dataset);
 
   return { content, dataset, status }
 }
 
 /**
  * UI BINDINGS
  */

  function displayHomeMenu() {
    return render({
      content: `Welcome to Machankura \n
      ${datasetToList(home)}`,
      dataset: home,
    });
  }
 
 $(() => {
   displayHomeMenu().then(({ status }) => setStatus(status));
 
   $('.phone-numPad').on('click.phone-numPad', '.phone-btn', event => {
 
     const status = $('.app').attr('data-status');
 
     switch (status) {
       case 'answerStandby':
       case 'answering':
         {
           const index = $(event.target).attr('data-action');
           const previousVal = (status === `answerStandby`) ? '' : $('.phone-overlay').text();
           answering(`${previousVal}${index}`).then(({ status }) => setStatus(status))
         }
         break;
     }
   })
 
   $('.phone-navPad').on('click.confirm', '.confirm', event => {
 
     const status = $('.app').attr('data-status');
 
     switch (status) {
       case DEFAULT_STATUS:
         answerStandby().then(({ status }) => setStatus(status));
         break;
       case 'answering':
         {
           const value = $('.phone-overlay').text();
           const dataset = $('.app').data('dataset');
 
           answer(value, dataset)
             .then(({ status }) => hideOverlay({ status }))
             .catch(reason => {
               return displayError(reason)
                 .then(({ status }) => setStatus(status))
                 .then(() => new Promise(resolve => setTimeout(resolve, 3000)))
                 .then(hideOverlay);
             })
             .then(({ status }) => setStatus(status));
         }
         break;
     }
   }).on('click.confirm', '.cancel', event => {
     const status = $('.app').attr('data-status');
 
     switch (status) {
       case 'answerStandby':
         hideOverlay().then(({ status }) => setStatus(status));
         break;
       case 'answering':
         answerStandby().then(({ status }) => setStatus(status));
         break;
       default:
         displayHomeMenu().then(({ status }) => setStatus(status))
         break;
     }
   })
 });

 
/* 0 - HOME */
  
  var home = [
    null,
    { title: "Send bitcoin", confirm: sendBitcoin },
    { title: "Receive bitcoin", confirm: receiveBitcoin },
    { title: "Account details (balance and history)" },
    { title: "Buy goods/services" },
    { title: "PIN change/reset" },
    { title: "Exit" },
  ];
  
  /* 1 - Send Bitcoin */
  function sendBitcoin() {
    return render({
      content: "How many sats do you want to send?",
      dataset: enterPhoneOrAddress,
      status: "answerStandby",
    });
  }
  
  function enterPhoneOrAddress() {
    return render({
      content: "Enter phone number/lightning address you want to send to:",
      dataset: enterPIN,
      status: "answerStandby",
    });
  }
  
  function enterPIN() {
    return render({
      content: "Enter PIN to confirm:",
      dataset: displaySuccessScreen,
      status: "answerStandby",
    });
  }
  
  function displaySuccessScreen() {
    return render({
      content: `Sats sent successfully. You will receive an SMS with confirmation shortly.`,
      status: "final",
    });
  }
  
  /* 2 - Receive Bitcoin */
  
  var receiveHelp = [
    null,
    { title: "What is this?", confirm: whatIsLightning },
    { title: "Update username" },
    { title: "SMS lightning address" },
    { title: "Exit" },
  ];
  
  function receiveBitcoin() {
    return render({
      content: `Your lightning address is 256771234678@8333.mobi \n
      ${datasetToList(receiveHelp)}`,
      dataset: receiveHelp,
    });
  }
  
  function whatIsLightning() {
    return render({
      content: `Your lightning address is like an email address but for your bitcoin.`,
      status: "final",
    });
  }
  