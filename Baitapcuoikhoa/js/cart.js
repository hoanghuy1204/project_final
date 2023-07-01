
$('#clickPay').on('click', function() {
    Swal.fire({
        title: "Are you sure to make payment?",
        text: "Once choosed, you will not be able to recover it!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            Swal.fire("Successful transaction!", {
            icon: "success",
          });
        } 
      });
})

$('#clickDelete').on('click', function() {
    Swal.fire("Deleted Successfully!", "Continue shopping!", "success", {
        button: true,
      });
})