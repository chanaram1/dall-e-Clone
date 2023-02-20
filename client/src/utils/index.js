import FileSaver from 'file-saver'

import {surpriseMePrompts} from "../constants"

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randonPrompt = surpriseMePrompts[randomIndex];

  if (randonPrompt == prompt) return getRandomPrompt(prompt) //to make sure it's not generated twice in a row

  return randonPrompt
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}