import { TAGS } from "../constants/tags.js";
import { model, Schema } from "mongoose";


const noteSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: "Note", required: true },
    title: {type: String, required: true, trim: true},
    content: {type: String, required: false, trim: true, default: ""},
    tag: {type: String, required: false, enum:[...TAGS], default: "Todo" }

  },{
    timestamps: true,
    versionKey: false,
  });

  noteSchema.index({title: "text", content: "text"});
  export const Note = model("Note", noteSchema);

// Розширте модель Note обов’язковим полем userId (тип ObjectId, посилання на модель User).



// Оновіть усі контролери колекції нотаток:

// createNote — при створенні додавайте userId з req.user._id;
// getAllNotes — повертайте лише нотатки, що належать поточному користувачу;
// getNoteById — шукайте нотатку за _id, яка належить поточному користувачу;
// updateNote — оновлювати можна лише нотатку, яка належить поточному користувачу;
// deleteNote — видаляти можна лише нотатку, яка належить поточному користувачу.


// Якщо нотатку не знайдено (бо вона не існує або належить іншому користувачу) — повертати через createHttpError помилку зі статусом 404 і повідомлення 'Note not found'.
