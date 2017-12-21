import firebase from 'firebase';

class FireBase {
    uid = '';
    messageRef = null;
    doctorRef = null;

    constructor() {
        const config = {
            apiKey: "AIzaSyAseV8_PZsRzaufgTyVjZxtkHvIBRvs4lo",
            authDomain: "hospital-4e0b5.firebaseapp.com",
            databaseURL: "https://hospital-4e0b5.firebaseio.com",
            projectId: "hospital-4e0b5",
            storageBucket: "hospital-4e0b5.appspot.com",
            messagingSenderId: "818544069178"
        };
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setUid(user.uid);
            }
            else {
                firebase.auth().signInAnonymously().catch((error) => {
                    alert(error.message);
                });
            }
        });
        this.messageRef = firebase.database().ref('messages');
        this.doctorRef = firebase.database().ref('doctor');
    }

    setUid(value) {
        this.uid = value;
    }
    getUid() {
        return this.uid;
    }

    loadMessages(callback) {
        const onReceive = (data) => {
            const message = data.val();
            callback({
                _id: data.key,
                text: message.text,
                createdAt: new Date(message.createdAt),
                user: {
                    _id: message.user._id,
                    name: message.user.name,
                    avatar: message.user.avatar,
                },
            });
        };
        this.messageRef.limitToLast(20).on('child_added', onReceive);
    }

    sendMessage(message) {
        for (let i = 0; i < message.length; i++) {
            this.messageRef.push({
                text: message[i].text,
                user: message[i].user,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
            });
        }
    }

    closeChat() {
        if (this.messageRef) {
            this.messageRef.off();
        }
    }

    addDoctor(data) {
        for (let i = 0; i < data.length; i++) {
            this.doctorRef.push({
                name: data[i].name,
                imageUrl: data[i].imageUrl,
                khoa: data[i].khoa
            });
        }
    }

    loadDoctors(callback) {
        const onReceive = (data) => {
            const doctor = data.val();
            callback({
                name: doctor.name,
                imageUrl: doctor.imageUrl,
                khoa: doctor.khoa
            });
        };
        this.doctorRef.on('child_added', onReceive);
    }
}

export default new FireBase();