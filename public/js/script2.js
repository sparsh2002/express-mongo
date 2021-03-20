function validateForm()
        {
        var x= document.forms['volunteer']['fname'].value;
        var y=document.forms['volunteer']['mnumber'].value;
        var z=document.forms['volunteer']['pass'].value;
        var a=document.forms['volunteer']['email'].value;
        var b=document.forms['volunteer']['add'].value;
        var c=document.forms['volunteer']['state'].value;
        var d=document.forms['volunteer']['city'].value;

        if (x==null || x=="")
        {
            alert("Please enter the Name");
            document.volunteer.fname.focus();
            return false;
        }
        if (y==null || y=="" || isNaN(y) || y.length>10 || y.length<10)
        {
            alert("Please enter a valid mobile number");
            document.volunteer.mnumber.focus();
            return false;
        }
        if (z==null || z=="")
        {
            alert("Please enter a  password");
            document.volunteer.pass.focus();
            return false;
        }
        if (a==null || a=="")
        {
            alert("Please enter the email");
            document.volunteer.email.focus();
            return false;
        }
        if (b==null || b=="")
        {
            alert("Please enter the address");
            document.volunteer.add.focus();
            return false;
        }
        if (c==null || c=="")
        {
            alert("Please enter the state");
            document.volunteer.state.focus();
            return false;
        }
        if (d==null || d=="")
        {
            alert("Please enter the address");
            document.volunteer.city.focus();
            return false;
        }
        
        }