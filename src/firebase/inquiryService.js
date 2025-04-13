// 문의하기 기능 서비스
import { db } from './config';
import { collection, addDoc } from 'firebase/firestore';

/**
 * 문의사항을 Firestore에 저장하는 함수
 * @param {Object} inquiryData - 문의사항 데이터 객체
 * @returns {Promise} Firestore 저장 결과
 */
export async function submitInquiry(inquiryData) {
  try {
    // 필수 필드 검증
    if (!inquiryData.name || !inquiryData.email || !inquiryData.subject || !inquiryData.message) {
      throw new Error('필수 항목이 누락되었습니다.');
    }
    
    // Firestore에 문의사항 저장
    const docRef = await addDoc(collection(db, 'inquiries'), {
      ...inquiryData,
      status: 'new', // 신규 문의 상태
      createdAt: new Date()
    });
    
    console.log('문의사항이 성공적으로 저장되었습니다. ID:', docRef.id);
    return docRef.id;
    
  } catch (error) {
    console.error('문의사항 저장 중 오류 발생:', error);
    throw error;
  }
}
