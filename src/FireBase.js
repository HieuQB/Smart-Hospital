import firebase from 'firebase';

class FireBase {
    uid = '';
    messageRef = null;
    doctorRef = null;
    calendarRef = null;
    constactRef = null;
    infoRef = null;
    questionRef = null;
    costRef = null;

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
        this.constactRef = firebase.database().ref('contact');
        this.infoRef = firebase.database().ref('info');
        this.questionRef = firebase.database().ref('question');
        this.costRef = firebase.database().ref('cost');
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
                key: data[i].key,
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

    addContact(data) {
        this.constactRef.push({
            address: data.address,
            phone: data.phone,
            mail: data.mail,
            web: data.web
        });
    }

    loadContact(callback) {
        const onReceive = (data) => {
            const contact = data.val();
            callback({
                address: contact.address,
                phone: contact.phone,
                mail: contact.mail,
                web: contact.web
            });
        };
        this.constactRef.on('child_added', onReceive);
    }

    addInfo(data) {
        this.infoRef.push({
            info: data.info,
            khoa: data.khoa,
            thanhTich: data.thanhTich,
            lich: data.lich,
            wifi: data.wifi
        });
    }

    loadInfo(callback) {
        const onReceive = (data) => {
            const info = data.val();
            callback({
                info: info.info,
                khoa: info.khoa,
                thanhTich: info.thanhTich,
                lich: info.lich,
                wifi: info.wifi,
            });
        };
        this.infoRef.on('child_added', onReceive);
    }

    addQuestion(data) {
        for (let i = 0; i < data.length; i++) {
            this.questionRef.push({
                key: data[i].key,
                title: data[i].title,
                userName: data[i].userName,
                userAge: data[i].userAge,
                userTime: data[i].userTime,
                userQuestion: data[i].userQuestion,
                doctorName: data[i].doctorName,
                doctorTime: data[i].doctorTime,
                doctorAnswer: data[i].doctorAnswer,
                category: data[i].category,
            });
        }
    }

    loadQuestion(callback) {
        const onReceive = (data) => {
            const question = data.val();
            callback({
                key: question.key,
                title: question.title,
                userName: question.userName,
                userAge: question.userAge,
                userTime: question.userTime,
                userQuestion: question.userQuestion,
                doctorName: question.doctorName,
                doctorTime: question.doctorTime,
                doctorAnswer: question.doctorAnswer,
                category: question.category,
            });
        };
        this.questionRef.on('child_added', onReceive);
    }

    addCost(data) {
        for (let i = 0; i < data.length; i++) {
            this.costRef.push({
                data: data[i].data,
                title: data[i].title,
            });
        }
    }

    loadCost(callback) {
        const onReceive = (data) => {
            const cost = data.val();
            callback({
                data: cost.data,
                title: cost.title,
            });
        };
        this.costRef.on('child_added', onReceive);
    }
}

export default new FireBase();