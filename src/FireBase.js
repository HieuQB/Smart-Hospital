import firebase from 'firebase';

class FireBase {
    uid = '';
    messageRef = null;
    doctorRef = null;
    calendarRef = null;

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
        this.calendarRef = firebase.database().ref('calendar');
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
                key: message.key,
                user: {
                    _id: message.user._id,
                    name: message.user.name,
                    avatar: message.user.avatar,
                },
            });
        };
        this.messageRef.limitToLast(20).on('child_added', onReceive);
    }

    sendMessage(message, name) {
        for (let i = 0; i < message.length; i++) {
            this.messageRef.push({
                text: message[i].text,
                user: message[i].user,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
                key: message[i].user.name + '-' + name
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
                key: doctor.key,
                name: doctor.name,
                imageUrl: doctor.imageUrl,
                khoa: doctor.khoa
            });
        };
        this.doctorRef.on('child_added', onReceive);
    }

    addCalendar(data) {
        for (let i = 0; i < data.length; i++) {
            this.calendarRef.push({
                name: data[i].name,
                date: data[i].date,
                data: data[i].data
            });
        }
    }

    loadCalendar(callback, name, date) {
        var ob = {data: []};
        const onReceive = (data) => {
            const calendar = data.val();
            if (calendar.name == name && calendar.date == date) {
                ob = {
                    _id: data.key,
                    name: calendar.name,
                    date: calendar.date,
                    data: calendar.data
                };
                callback(ob);
            }
            else {
                callback(ob);
            }
        };
        this.calendarRef.on('child_added', onReceive);
    }

    updateCalendar(callback, name, date, update) {
        const onReceive = (data) => {
            const calendar = data.val();
            if (calendar.name == name && calendar.date == date) {
                update.check = true;
                callback(update);
            }
            else {
                update.check = false;
                callback(update);
            }
        };
        this.calendarRef.on('child_added', onReceive);
    }

    updateItemCalendar(data, key) {
        firebase.database().ref('calendar/' + key._id).set({
            name: key.name,
            date: key.date,
            data: data
        });
    }
}

export default new FireBase();