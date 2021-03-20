function validateForm()
        {
        var x= document.forms['ngo']['fname'].value;
        var y=document.forms['ngo']['mnumber'].value;
        var z=document.forms['ngo']['pass'].value;
        var a=document.forms['ngo']['email'].value;
        var b=document.forms['ngo']['add'].value;

        if (x==null || x=="")
        {
            alert("Please enter the Name");
            document.ngo.fname.focus();
            return false;
        }
        if (y==null || y=="" || isNaN(y) || y.length>10 || y.length<10)
        {
            alert("Please enter a valid mobile number");
            document.ngo.mnumber.focus();
            return false;
        }
        if (z==null || z=="")
        {
            alert("Please enter a  password");
            document.ngo.pass.focus();
            return false;
        }
        if (a==null || a=="")
        {
            alert("Please enter the email");
            document.ngo.email.focus();
            return false;
        }
        if (b==null || b=="")
        {
            alert("Please enter the address");
            document.ngo.add.focus();
            return false;
        }
        
        }