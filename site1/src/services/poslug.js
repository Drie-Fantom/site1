import img1 from "../components/img/img1.jpg";
import img2 from "../components/img/img2.jpg";
import img3 from "../components/img/img3.jpg";

export default class Poslug {
    poslug = [
        {
            id: 'Юридична допомога',
            img: img1,
            deals: [
                'Вирішую випадки будь якоі складності',
                'Починаючи від прийнятті спадщини закінчуючи зміни цільового призначення земельних ділянок...'
            ]
        },
        {
            id:'Продаж нерухомості',
            img: img2,
            deals: [
                'Перевірка правостановлюючих документів',
                'Підготовка документів до продажу будьякої складності',
                'Пошук покупців',
                'Реклама обєкта'
            ]
        },
        {
            id:'Купівля нерухомост',
            img: img3,
            deals: [
                'Підбір варіантів які відповідають вимогам клієнт',
                'Участь в огляді об’єктів',
                'Переговори',
                'Попередження покупця про всі ризики ',
            ]
        }
    ];
}
