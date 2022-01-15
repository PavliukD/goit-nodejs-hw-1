# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/6sx1VqfOhFiu6WV5KhR6iVBh9BQHLh
# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/JvfI5TOjBwbUGYF9QvaRyyHzDL2ITT
# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/QZBrXlz7vwM99M3mAU2Y9TadEoaKQh
# Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/NPgDzsBtljxszG9MtN1LN8jJ0eR8xk
# Пытаемся добавить пустой контакт
node index.js --action add
https://monosnap.com/file/UsD45Qlpcy71BoLGxyGC3gXVsZoJyV