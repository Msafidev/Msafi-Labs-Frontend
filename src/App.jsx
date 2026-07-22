// App.jsx
import { 
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Homepage from './Pages/Homepage';
import TheLabs from './Pages/The-Labs';
import LabsOverview from './Pages/The-Labs/LabsOverview';
import DesignLab from './Pages/The-Labs/DesignLab';
import CodeLab from './Pages/The-Labs/CodeLab';
import AiLab from './Pages/The-Labs/AiLab';
import Platform from './Pages/The-Labs/Platform';
import About from './Pages/Aboutpage';
import Portfolio from './Pages/Portfolio';   
import Blog from './Pages/Blog'; 
import ContactSection from './Pages/ContactSection';
import Careers from './Pages/Careers';
import FAQsPage from './Pages/FAQsPage';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import TermsPage from './Pages/TermsPage';
import ChatbotWidget from "./components/ChatbotWidget";
import BlogPost from "./Pages/BlogPost";
import ProjectDetail from "./Pages/ProjectDetail";
import InquiryModal from "./components/InquiryModal";
import NotFoundPage from './Pages/NotFoundPage';
import { useInquiryModal } from "./hooks/useInquiryModal";
import { InquiryProvider } from './contexts/InquiryContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="the-labs" element={<TheLabs />}>
          <Route index element={<LabsOverview />} />
          <Route path="design" element={<DesignLab />} />
          <Route path="code" element={<CodeLab />} />
          <Route path="ai" element={<AiLab />} />
          <Route path="platform" element={<Platform />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<ContactSection />} />
        <Route path="careers" element={<Careers />} />
        <Route path="faqs" element={<FAQsPage />} />
        <Route path="privacy" element={<PrivacyPolicyPage />} />
        <Route path="terms" element={<TermsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

const App = () => {
  const inquiry = useInquiryModal();
  return (
    <InquiryProvider
      endpoint={`${import.meta.env.VITE_API_URL}/api/inquiries/`}
      mock={false}
    >
      <RouterProvider router={router} />
      <ChatbotWidget
        onOpenInquiry={inquiry.open}
        whatsappNumber="254759015376"
        portfolioPath="/portfolio"
      />
      <InquiryModal
        isOpen={inquiry.isOpen}
        variant={inquiry.variant}
        onClose={inquiry.close}
      />
    </InquiryProvider>
  );
};

export default App;