<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Congratulations!</title>
</head>
<body>

<ul>

<li><p><b>First Name:</b>
   <%= request.getParameter("firstName")%>
</p></li>
<li><p><b>Last  Name:</b>
   <%= request.getParameter("lastName")%>
</p></li>
<li><p><b>Phone Number:</b>
   <%= request.getParameter("phone")%>
</p></li>
<li><p><b>Email:</b>
   <%= request.getParameter("email")%>
</p></li>
<li><p><b>Bootcamp:</b>
   <%= request.getParameter("Classes")%>
</p></li>
</ul>

</body>
</html>