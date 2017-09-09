import alt from '../alt';

class AjaxTestActions {
  constructor() {
    this.generateActions(
        'getTotalCountSuccess',
        'getTotalCountFail',
        'updateDataSuccess',
        'updateDataFail',
      )
    }

    getTotalCount() {
      $.ajax({
        type: "GET",
        url: '/api/ajax/count'
      })
        .done((data) => {
          this.actions.getTotalCountSuccess(data.count); 
        })
        .fail((jqXhr) => {
          this.actions.getTotalCountFail(jqXhr.responseJSON.message); 
        }) 
    }

    updateData(result) {
      $.ajax({
        type: "POST",
        url: '/api/ajax/',
        data: { result: result },
      })
        .done((data) => {
          this.actions.updateDataSuccess(data);
        })
        .fail((jqXhr) => {
          this.actions.updateDataFail(jqXhr.responseJSON.message);
        });
    }
}


export default alt.createActions(AjaxTestActions);
