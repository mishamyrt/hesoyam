import { BackgroundUsecase } from './background/BackgroundUsecase.js';
import { EncoderUsecase } from './encoder/EncoderUsecase.js';
import type { Usecase } from './types.js';

export const usecases: Usecase[] = [BackgroundUsecase, EncoderUsecase];