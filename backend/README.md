Here are the `curl` commands for testing:

### **1. Sign Up**
```cmd
curl -X POST http://localhost:5000/api/auth/signup -H "Content-Type: application/json" -d "{\"username\":\"testuser\",\"email\":\"test@example.com\",\"password\":\"password123\"}"
```

---

### **2. Login**
```cmd
curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d "{\"email\":\"test@example.com\",\"password\":\"password123\"}"
```

---

### **3. Logout**
```cmd
curl -X POST http://localhost:5000/api/auth/logout -H "Authorization: Bearer <your_token_here>"
```

---

### **4. Get Feed**
```cmd
curl -X GET http://localhost:5000/api/feed -H "Authorization: Bearer <your_token_here>"
```

---

### **5. Post to Feed**
```cmd
curl -X POST http://localhost:5000/api/feed -H "Content-Type: application/json" -H "Authorization: Bearer <your_token_here>" -d "{\"content\":\"This is a test post\"}"
```

---

### **6. Get Profile by User ID**
```cmd
curl -X GET http://localhost:5000/api/profile/12345 -H "Authorization: Bearer <your_token_here>"
```

---

### **7. Update Profile by User ID**
```cmd
curl -X PUT http://localhost:5000/api/profile/12345 -H "Content-Type: application/json" -H "Authorization: Bearer <your_token_here>" -d "{\"bio\":\"Updated bio\",\"location\":\"Kolkata\"}"
```

---

### **Notes:**
✅ Replace `<your_token_here>` with a valid token.  
✅ Replace `12345` with an actual user ID.