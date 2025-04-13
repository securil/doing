import { collection, getDocs, getDoc, doc, query, orderBy, limit } from "firebase/firestore";
import { db } from "./config";

/**
 * 프로젝트 목록 조회 함수
 * @param {number} limitCount - 조회할 프로젝트 수
 * @returns {Promise<Array>} 프로젝트 목록
 */
export const getProjects = async (limitCount = 6) => {
  try {
    const projectsQuery = query(
      collection(db, "projects"),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(projectsQuery);
    const projects = [];
    
    querySnapshot.forEach((doc) => {
      projects.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return projects;
  } catch (error) {
    console.error("프로젝트 목록 조회 중 오류 발생:", error);
    throw error;
  }
};

/**
 * 특정 프로젝트 상세 조회 함수
 * @param {string} projectId - 프로젝트 ID
 * @returns {Promise<Object>} 프로젝트 상세 정보
 */
export const getProjectById = async (projectId) => {
  try {
    const docRef = doc(db, "projects", projectId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      throw new Error("프로젝트를 찾을 수 없습니다.");
    }
  } catch (error) {
    console.error("프로젝트 상세 조회 중 오류 발생:", error);
    throw error;
  }
};
