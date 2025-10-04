//У папці src/models створіть файл note.js із Mongoose-схемою. Вона має містити поля:

// title — обов’язковий рядок, з параметром trim: true
// content — необов’язковий рядок (за замовчуванням порожній), з параметром trim: true
// tag — приймає одне із фіксованих значень (Work, Personal, Meeting, Shopping, Ideas, Travel, Finance, Health, Important, Todo). Необов’язковий рядок (за замовчуванням Todo)


// Для автоматичного створення полів createdAt та updatedAt, використовуйте параметр timestamps: true при створенні моделі. Це автоматично буде додавати до об'єкту два поля: createdAt (дата створення) та updatedAt (дата оновлення).

// title
// "Buy groceries"
// content
// "Milk, eggs, bread, coffee"
// tag
// "Shopping"

import { model, Schema } from "mongoose";
  const noteSchema = new Schema({
    title: {type: String, required: true, trim: true},
    content: {type: String, required: false, trim: true, default: ""},
    tag: {type: String, required: false, enum:["Work", "Personal", "Meeting", "Shopping", "Ideas", "Travel", "Finance", "Health", "Important", "Todo"], default: "Todo" }

  },{
    timestamps: true,
    versionKey: false,
  });

  export const Note = model("Note", noteSchema);
