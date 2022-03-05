import i_believe_you from '../static/voice/i_believe_you.mp3'
import incredible_job_agent from '../static/voice/incredible_job_agent.mp3'
import ive_been_expecting_you_agent from '../static/voice/ive_been_expecting_you_agent.mp3'
import passphrase_accepted from '../static/voice/passphrase_accepted.mp3'
import please_enter_the_passcode from '../static/voice/please_enter_the_passcode.mp3'
import thank_you_so_much from '../static/voice/thank_you_so_much.mp3'

const sounds: any = {
  i_believe_you,
  incredible_job_agent,
  ive_been_expecting_you_agent,
  passphrase_accepted,
  please_enter_the_passcode,
  thank_you_so_much,
}

let audio: HTMLAudioElement;

// a little hack to get around stupid web standards
export function setAudio() {
  audio = new Audio()
}

export function playSound(id: string) {
  audio.src = sounds[id]
  audio.play();
  audio.loop = false

  return audio
}