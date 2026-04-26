package logger

import (
	"log"
	"os"
)

type Logger struct {
	infoLogger  *log.Logger
	errorLogger *log.Logger
	debugLogger *log.Logger
}

func NewLogger() *Logger {
	return &Logger{
		infoLogger:  log.New(os.Stdout, "INFO: ", log.Ldate|log.Ltime|log.Lshortfile),
		errorLogger: log.New(os.Stderr, "ERROR: ", log.Ldate|log.Ltime|log.Lshortfile),
		debugLogger: log.New(os.Stdout, "DEBUG: ", log.Ldate|log.Ltime|log.Lshortfile),
	}
}

func (l *Logger) Info(msg string) {
	l.infoLogger.Println(msg)
}

func (l *Logger) Error(msg string) {
	l.errorLogger.Println(msg)
}

func (l *Logger) Debug(msg string) {
	l.debugLogger.Println(msg)
}

func (l *Logger) Infof(format string, v ...interface{}) {
	l.infoLogger.Printf(format, v...)
}

func (l *Logger) Errorf(format string, v ...interface{}) {
	l.errorLogger.Printf(format, v...)
}

func (l *Logger) Debugf(format string, v ...interface{}) {
	l.debugLogger.Printf(format, v...)
}
