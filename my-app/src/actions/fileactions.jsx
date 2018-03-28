import './action_constants';
import toastr from 'toastr';

export function UploadSuccess(data) {
    return {
        type: 'UPLOAD_SUCCESS',
        payload:{
            data
        }
    };
}

export function UploadFailure(data) {
    return {
        type: 'UPLOAD_FAILURE',
        payload:{
            data
        }
    };
}

export function FilelistSuccess(data) {
    return {
        type: 'LISTFILES_SUCCESS',
        payload:{
            data
        }
    };
}

export function FilelistFailure(data) {
    return {
        type: 'LISTFILES_FAILURE',
        payload:{
            data
        }
    };
}


//save the uploaded files with api
export const saveFileDetails = (data) => (dispatch) => {
  console.log(data,'data for api')
    fetch('http://10.10.0.61:9005/file/upload/', {
          method: "post",
          body: data,
          headers: {
            'Content-Type': "multipart/form-data; boundary=032a1ab685934650abbe059cb45d6ff3",
            // 'X-CSRFToken': csrftoken
          },
        }).then(function(response) {

            return response.json();
        })
        .then(function(response)
        {
            if (response && response.status === 201)
            {
                toastr.success(response.message);
                dispatch(UploadSuccess(response,true));
            }
            else if(response && response.status === 400)
            {
                toastr.error(response.errors);
                dispatch(UploadFailure(response,false));

            }
        });

};

//Fetch the saved file details with api
export const fetchFileDetails = (searchdata) => (dispatch) => {
    let a="";
    if(searchdata!==undefined&&searchdata!==""){
        a="?search="+searchdata;
    }
    fetch('http://10.10.0.61:9005/file/list/',{
          method: "get",
        }).then(function(response) {

            return response.json();
        })
        .then(function(response)
        {
            if (response && response.status === 200)
            {
                dispatch(FilelistSuccess(response.data));
            }
            else if(response && response.status === 400)
            {
                toastr.error(response);
                dispatch(FilelistFailure(response));

            }
        });

};
