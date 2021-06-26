import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { database } from '../services/firebase';
import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import logoDarkImg from '../assets/images/logo_dark.svg';

import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';


import { Button } from '../components/Button';
import { Question } from '../components/Question/index';
import { RoomCode } from '../components/RoomCode';
import { useRoom } from '../hooks/useRoom';
import deleteImg from '../assets/images/delete.svg'
import '../styles/room.scss';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const { theme } = useTheme();
  const { signOut } = useAuth();
  const params = useParams<RoomParams>();
  // const [newQuestion, setNewQuestion] = useState('');
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);
  const history = useHistory();

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })
    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }
  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <div id="page-room" className={theme}>
      <header>
        <div className="content">
          {theme === 'light' ? (
            <img src={logoImg} alt='LetMeAsk' />
          ) : (
            <img src={logoDarkImg} alt='LetMeAsk' />
          )
          }
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>Encerrar Sala</Button>
            <div><Button className="Leave" type="submit" onClick={() => signOut()}>Sair</Button></div>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>{title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>
        <div className="question-list">
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img src={checkImg} alt="Marcar pergunta como respondida" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  )
};
