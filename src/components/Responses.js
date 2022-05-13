import { motion, AnimatePresence } from 'framer-motion';
import Response from './Response';

const Responses = ({ savedResponses, deleteResponse }) => {
  if (savedResponses.length < 1)
    return <p className="response-message">No responses yet!</p>;
  return (
    <ul id="responses">
      <AnimatePresence>
        {savedResponses.map(response => (
          <motion.div
            key={response.date}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.4,
            }}
          >
            <Response
              prompt={response.prompt}
              response={response.response}
              date={response.date}
              key={response.date}
              deleteResponse={deleteResponse}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default Responses;
