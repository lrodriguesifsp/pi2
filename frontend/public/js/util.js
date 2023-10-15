function showAlert(alertMessage, alertType) {
    const alertPlaceholder = document.querySelector('#alert');
    const alertDiv = document.createElement('div');
    alertDiv.classList = `alert alert-${alertType} alert-dismissible fade show`;
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `${alertMessage}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    alertPlaceholder.appendChild(alertDiv);    
}