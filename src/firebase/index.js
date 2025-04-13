import app, { db, auth, storage } from './config';
import { submitInquiry, subscribeNewsletter } from './inquiryService';
import { getProjects, getProjectById } from './projectService';

export {
  app,
  db,
  auth,
  storage,
  submitInquiry,
  subscribeNewsletter,
  getProjects,
  getProjectById
};
