import as_always from '../static/voice/as_always.mp3'
import dont_worry_youll from '../static/voice/dont_worry_youll.mp3'
import he_can_hear_you_now from '../static/voice/he_can_hear_you_now.mp3'
import i_believe_you from '../static/voice/i_believe_you.mp3'
import incredible_job_agent from '../static/voice/incredible_job_agent.mp3'
import ive_been_expecting_you_agent from '../static/voice/ive_been_expecting_you_agent.mp3'
import passphrase_accepted from '../static/voice/passphrase_accepted.mp3'
import please_enter_the_passcode from '../static/voice/please_enter_the_passcode.mp3'
import thank_you_so_much from '../static/voice/thank_you_so_much.mp3'
import theres_only_one_thing from '../static/voice/theres_only_one_thing.mp3'
import we_have_reason_to_believe from '../static/voice/we_have_reason_to_believe.mp3'

const sounds: any = {
  as_always,
  dont_worry_youll,
  he_can_hear_you_now,
  i_believe_you,
  incredible_job_agent,
  ive_been_expecting_you_agent,
  passphrase_accepted,
  please_enter_the_passcode,
  thank_you_so_much,
  theres_only_one_thing,
  we_have_reason_to_believe
}

let audio: HTMLAudioElement;

export function setAudio() {
  audio = new Audio()
}

export function playSound(id: string) {
  audio.src = sounds[id]
  audio.play();

  return audio
}