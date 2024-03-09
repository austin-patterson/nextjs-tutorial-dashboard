function ScorecardSkeleton() {
  return (
    <div className="mb-4 bg-gray-100 rounded-xl p-4 h-24">
      <div className="h-5 w-24 bg-gray-200 rounded-md" />
      <div className="mt-2 h-4 w-16 bg-gray-200 rounded-md" />
    </div>
  );
}

function ScrollingWordBankSkeleton() {
  return (
    <div className="mb-10 bg-gray-100 rounded-xl p-4 flex-grow overflow-auto">
      <div className="h-10 w-full bg-gray-200 rounded-md mb-4" />
      <div className="h-10 w-full bg-gray-200 rounded-md mb-4" />
      <div className="h-10 w-full bg-gray-200 rounded-md mb-4" />
      {/* Repeat as many times as needed */}
    </div>
  );
}

function TypingInputSkeleton() {
  return (
    <div className="mb-4 bg-gray-100 rounded-xl p-4">
      <div className="h-12 p-4 w-full bg-gray-200 rounded-md" />
    </div>
  );
}

function TypingTestSkeleton() {
  return (
    <div className="flex flex-col h-full p-4 w-3/4">
      <div className="flex p-12">
        <div className="flex-grow h-full w-1/4"></div>
        <div className="flex-row w-full">
          <ScorecardSkeleton />
          <ScrollingWordBankSkeleton />
          <TypingInputSkeleton />
        </div>
      </div>
    </div>
  );
}

export default function Loading() {
  return <TypingTestSkeleton />;
}