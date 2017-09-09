import alt from '../alt';
import AjaxTestActions from '../actions/AjaxTestActions';

class AjaxTestStore {
  constructor() {
    this.bindActions(AjaxTestActions);
    this.count = 0;
    this.result = true;
    this.message = 'default';
  }


  onGetTotalCountSuccess(data) {
    this.count = data; 
  }

  onGetTotalCountFail(jqXhr) {
   toastr.error(jqXhr.responseJSON.message); 
  }

  onUpdateDataSuccess(data) {
    this.result = data.result.result;
    this.message = data.message;
  }

  onUpdateDataFail(jqXhr) {
    toastr.error(jqXhr.responseJson.message);
  }

}


export default alt.createStore(AjaxTestStore);
